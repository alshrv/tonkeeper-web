import { app } from 'electron';

const EditMenu: Electron.MenuItemConstructorOptions = {
    label: 'Edit',
    submenu: [
        {
            label: 'Undo',
            accelerator: 'CmdOrCtrl+Z',
            role: 'undo'
        },
        {
            label: 'Redo',
            accelerator: 'Shift+CmdOrCtrl+Z',
            role: 'redo'
        },
        {
            type: 'separator'
        },
        {
            label: 'Cut',
            accelerator: 'CmdOrCtrl+X',
            role: 'cut'
        },
        {
            label: 'Copy',
            accelerator: 'CmdOrCtrl+C',
            role: 'copy'
        },
        {
            label: 'Paste',
            accelerator: 'CmdOrCtrl+V',
            role: 'paste'
        },
        {
            label: 'Select All',
            accelerator: 'CmdOrCtrl+A',
            role: 'selectall'
        }
    ]
};

const WindowMenu: Electron.MenuItemConstructorOptions = {
    label: 'Window',
    role: 'window',
    submenu: [
        {
            label: 'Minimize',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
        },
        {
            label: 'Close',
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
        }
    ]
};

const getDarwinMenu = (): Electron.MenuItemConstructorOptions => {
    return {
        label: 'Tonkeeper',
        submenu: [
            {
                label: 'About Tonkeeper Pro',
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                label: 'Check for Updates',
                click: function () {}
            },
            {
                type: 'separator'
            },
            {
                label: 'Hide Tonkeeper Pro',
                accelerator: 'Command+H',
                role: 'hide'
            },
            {
                label: 'Hide Others',
                accelerator: 'Command+Shift+H',
                role: 'hideothers'
            },
            {
                label: 'Show All',
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit Tonkeeper Pro',
                accelerator: 'Command+Q',
                click: function () {
                    app.quit();
                }
            }
        ]
    };
};

const getWinMenu = (): Electron.MenuItemConstructorOptions => {
    return {
        label: 'Tonkeeper',
        submenu: [
            {
                label: 'About Tonkeeper Pro',
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                label: 'Check for Updates',
                click: function () {}
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit Tonkeeper Pro',
                accelerator: 'Command+Q',
                click: function () {
                    app.quit();
                }
            }
        ]
    };
};

const ViewMenu: Electron.MenuItemConstructorOptions = {
    label: 'View',
    submenu: [
        {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: function (item, focusedWindow) {
                if (focusedWindow) focusedWindow.reload();
            }
        },
        {
            label: 'Toggle Full Screen',
            accelerator: (function () {
                if (process.platform === 'darwin') return 'Ctrl+Command+F';
                else return 'F11';
            })(),
            click: function (item, focusedWindow) {
                if (focusedWindow) focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
            }
        }
        //   {
        //     label: 'Toggle Developer Tools',
        //     accelerator: (function() {
        //       if (process.platform === 'darwin')
        //         return 'Alt+Command+I';
        //       else
        //         return 'Ctrl+Shift+I';
        //     })(),
        //     click: function(item, focusedWindow) {
        //       if (focusedWindow)
        //         focusedWindow.toggleDevTools();
        //     }
        //   },
    ]
};

export const AppMenu = (): (Electron.MenuItemConstructorOptions | Electron.MenuItem)[] => {
    return [
        process.platform === 'darwin' ? getDarwinMenu() : getWinMenu(),
        EditMenu,
        ViewMenu,
        WindowMenu
    ];
};
