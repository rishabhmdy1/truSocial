const menuItems = document.querySelectorAll('.menu-items');
const messagesNotification = document.querySelector('#messages-notification');
const bottomMessagesNotification = document.querySelector('#bottom-messages-notification');
const bottomMessageWrapper = document.querySelector('.bottom-message-wrapper');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const bottomMessageSearch = document.querySelector('#bottom-message-search');
const notifications = document.querySelector('#notifications');
const notificationsPopup = document.querySelector('.notifications-popup');
const createPost = document.querySelector('.create-post');
const searchBarMiddle = document.querySelector('.search-bar-middle');
const themeContainer = document.querySelector('.theme-container');
const themeBox = document.querySelector('.theme-box');
const themeSelector = document.querySelector('#theme-selector');
const bottomThemeSelector = document.querySelector('#bottom-theme-selector');
const themeDone = document.querySelector('.theme-done');
const themeMiddle = document.querySelector('.theme-middle');
const themeItems = document.querySelector('.theme-items');
const root = document.querySelector(':root');
const themeLightRed = document.querySelector('.theme-light-red');
const themeLightPurple = document.querySelector('.theme-light-purple');
const themeLightBlue = document.querySelector('.theme-light-blue');
const themeDarkRed = document.querySelector('.theme-dark-red');
const themeDarkPurple = document.querySelector('.theme-dark-purple');
const themeDarkBlue = document.querySelector('.theme-dark-blue');
const body = document.querySelector('body');

const changeActiveitem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveitem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            notificationsPopup.style.display = 'none';
        } else {
            notificationsPopup.style.display = 'block';
        }
    })
})
// ==================messages=================
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}
const searchBottomMessage = () => {
    const val = bottomMessageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);
bottomMessageSearch.addEventListener('keyup', searchBottomMessage);


messagesNotification.addEventListener('click', () => {

    messages.style.border = '0.15rem solid var(--color-primary)';



    setTimeout(() => {
        messages.style.border = 'none';
    }, 2000);
})

bottomMessagesNotification.addEventListener('click', () => {
    if (bottomMessageWrapper.style.display == 'block') {
        bottomMessageWrapper.style.display = 'none'
    }
    else {
        bottomMessageWrapper.style.display = 'block'
    }

})

notifications.addEventListener('click', () => {
    notificationsPopup.style.display = 'block';
})

searchBarMiddle.addEventListener('click', () => {
    createPost.style.border = '0.15rem solid var(--color-primary)';

});
document.addEventListener('click', (event) => {
    if (!searchBarMiddle.contains(event.target)) {
        createPost.style.border = 'none';
    }
});
document.addEventListener('click', (event) => {
    if (!bottomMessagesNotification.contains(event.target)) {
        bottomMessageWrapper.style.display = 'none'
    }
});


themeSelector.addEventListener('click', () => {
    themeContainer.style.display = 'grid'

})
bottomThemeSelector.addEventListener('click', () => {
    themeContainer.style.display = 'grid'
})

themeDone.addEventListener('click', () => {
    themeContainer.style.display = 'none'

})




themeContainer.addEventListener('click', (event) => {
    if (themeContainer.style.display == 'grid') {
        if (!themeBox.contains(event.target)) {
            themeContainer.style.display = 'none'
        }
    }

})






themeLightRed.addEventListener('click', () => {

    // =============primary color=====================
    root.style.setProperty('--primary-color-r', '249');
    root.style.setProperty('--primary-color-g', '24');
    root.style.setProperty('--primary-color-b', '128');
    // ============== white color=====================
    root.style.setProperty('--color-white-r', '255');
    root.style.setProperty('--color-white-g', '255');
    root.style.setProperty('--color-white-b', '255');
    // ===============background color================
    body.style.backgroundColor = 'var(--color-light)';
    // --------------font color=======================
    body.style.color = 'var(--color-dark)';
    // ==========miscellaneuos color===============>>>

    // ============side menu items hover==============
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgb(245, 245, 245)'
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'initial'
        })
    })
    // ==================search bar color=================
    root.style.setProperty('--color-search-r', '240');
    root.style.setProperty('--color-search-g', '238');
    root.style.setProperty('--color-search-b', '246');
    // ==================input color====================
    root.style.setProperty('--color-input-r', '0');
    root.style.setProperty('--color-input-g', '0');
    root.style.setProperty('--color-input-b', '0');
})
themeLightBlue.addEventListener('click', () => {

    // =============primary color=====================
    root.style.setProperty('--primary-color-r', '29');
    root.style.setProperty('--primary-color-g', '155');
    root.style.setProperty('--primary-color-b', '240');
    // ============== white color=====================
    root.style.setProperty('--color-white-r', '255');
    root.style.setProperty('--color-white-g', '255');
    root.style.setProperty('--color-white-b', '255');
    // ===============background color================
    body.style.backgroundColor = 'var(--color-light)';
    // --------------font color=======================
    body.style.color = 'var(--color-dark)';
    // ==========miscellaneuos color===============>>>

    // ============side menu items hover==============
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgb(245, 245, 245)'
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'initial'
        })
    })
    // ==================search bar color=================
    root.style.setProperty('--color-search-r', '240');
    root.style.setProperty('--color-search-g', '238');
    root.style.setProperty('--color-search-b', '246');
    // ==================input color====================
    root.style.setProperty('--color-input-r', '0');
    root.style.setProperty('--color-input-g', '0');
    root.style.setProperty('--color-input-b', '0');
})
themeLightPurple.addEventListener('click', () => {

    // =============primary color=====================
    root.style.setProperty('--primary-color-r', '120');
    root.style.setProperty('--primary-color-g', '86');
    root.style.setProperty('--primary-color-b', '255');
    // ============== white color=====================
    root.style.setProperty('--color-white-r', '255');
    root.style.setProperty('--color-white-g', '255');
    root.style.setProperty('--color-white-b', '255');
    // ===============background color================
    body.style.backgroundColor = 'var(--color-light)';
    // --------------font color=======================
    body.style.color = 'var(--color-dark)';
    // ==========miscellaneuos color===============>>>

    // ============side menu items hover==============
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgb(245, 245, 245)'
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'initial'
        })
    })
    // ==================search bar color=================
    root.style.setProperty('--color-search-r', '240');
    root.style.setProperty('--color-search-g', '238');
    root.style.setProperty('--color-search-b', '246');
    // ==================input color====================
    root.style.setProperty('--color-input-r', '0');
    root.style.setProperty('--color-input-g', '0');
    root.style.setProperty('--color-input-b', '0');
})
themeDarkRed.addEventListener('click', () => {
    // =============primary color=====================
    root.style.setProperty('--primary-color-r', '249');
    root.style.setProperty('--primary-color-g', '24');
    root.style.setProperty('--primary-color-b', '128');
    // ============== white color=====================
    root.style.setProperty('--color-white-r', '30');
    root.style.setProperty('--color-white-g', '39');
    root.style.setProperty('--color-white-b', '50');
    // ===============background color================
    body.style.backgroundColor = 'var(--color-dark)';
    // ===============font color================
    body.style.color = 'var(--color-light)';
    // ==========miscellaneuos color===============>>>

    // ============side menu items hover==============
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgb(25, 32, 45)'
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'initial'
        })
    })
    // ==================search bar color=================
    root.style.setProperty('--color-search-r', '39');
    root.style.setProperty('--color-search-g', '51');
    root.style.setProperty('--color-search-b', '64');
    // ==================input color====================
    root.style.setProperty('--color-input-r', '255');
    root.style.setProperty('--color-input-g', '255');
    root.style.setProperty('--color-input-b', '255');
})
themeDarkBlue.addEventListener('click', () => {
    // =============primary color=====================
    root.style.setProperty('--primary-color-r', '29');
    root.style.setProperty('--primary-color-g', '155');
    root.style.setProperty('--primary-color-b', '240');
    // ============== white color=====================
    root.style.setProperty('--color-white-r', '30');
    root.style.setProperty('--color-white-g', '39');
    root.style.setProperty('--color-white-b', '50');
    // ===============background color================
    body.style.backgroundColor = 'var(--color-dark)';
    // ===============font color================
    body.style.color = 'var(--color-light)';
    // ==========miscellaneuos color===============>>>

    // ============side menu items hover==============
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgb(25, 32, 45)'
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'initial'
        })
    })
    // ==================search bar color=================
    root.style.setProperty('--color-search-r', '39');
    root.style.setProperty('--color-search-g', '51');
    root.style.setProperty('--color-search-b', '64');
    // ==================input color====================
    root.style.setProperty('--color-input-r', '255');
    root.style.setProperty('--color-input-g', '255');
    root.style.setProperty('--color-input-b', '255');
})
themeDarkPurple.addEventListener('click', () => {
    // =============primary color=====================
    root.style.setProperty('--primary-color-r', '120');
    root.style.setProperty('--primary-color-g', '86');
    root.style.setProperty('--primary-color-b', '255');
    // ============== white color=====================
    root.style.setProperty('--color-white-r', '30');
    root.style.setProperty('--color-white-g', '39');
    root.style.setProperty('--color-white-b', '50');
    // ===============background color================
    body.style.backgroundColor = 'var(--color-dark)';
    // ===============font color================
    body.style.color = 'var(--color-light)';
    // ==========miscellaneuos color===============>>>

    // ============side menu items hover==============
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgb(25, 32, 45)'
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'initial'
        })
    })
    // ==================search bar color=================
    root.style.setProperty('--color-search-r', '39');
    root.style.setProperty('--color-search-g', '51');
    root.style.setProperty('--color-search-b', '64');
    // ==================input color====================
    root.style.setProperty('--color-input-r', '255');
    root.style.setProperty('--color-input-g', '255');
    root.style.setProperty('--color-input-b', '255');
})


// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         changeActiveitem();
//         item.classList.add('active');
//         if (item.id != 'notifications') {
//             notificationsPopup.style.display = 'none';
//         } else {
//             notificationsPopup.style.display = 'block';
//         }
//     })
// })