import {
    bind
} from "core-js/core/function";

const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeBtn, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeBtn),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                showModal();
                
                function showModal() {
                    modal.style.display = 'block';
                    document.body.style.overflow = "hidden";
                }

                function hideModals() {
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
                }

                if (item.classList.contains('popup_calc_button')) {
                    if (!state.width || !state.height) {
                        modal.style.display = 'none';
                    } else {
                        hideModals();
                        showModal();
                    }
                }

                if (item.classList.contains('popup_calc_profile_button')) {
                    if (!state.profile) {
                        modal.style.display = 'none';
                    } else {
                        hideModals();
                        showModal();
                    }
                }

            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            windows.forEach(item => {
                item.style.display = 'none';
            });
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModal(".phone_link", '.popup', '.popup .popup_close');
    bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close", false);
    bindModal(".popup_calc_button", ".popup_calc_profile", '.popup_calc_profile_close', false);
    bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
    // showModalByTime(".popup", 60000);
};

export default modals;