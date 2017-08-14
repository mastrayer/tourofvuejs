// alert-modal.js
import AlertModalTemplate from './alert-modal-template.vue';

module.exports = {
    install(Vue) {
        var ModalConstructor = Vue.extend(AlertModalTemplate);
        var modalInstance = null;

        window.AlertModal = function () {
        };

        window.AlertModal.show = function (title, message) {
            if (modalInstance) {
                modalInstance.isShowModal = true;
                modalInstance.title = title;
                modalInstance.message = message;
                return;
            }

            modalInstance = new ModalConstructor({
                el: document.createElement('div'),
                data() {
                    return {
                        title: title,
                        message: message
                    };
                }
            });
            modalInstance.isShowModal = true;
            document.body.appendChild(modalInstance.$el);
        };

        window.AlertModal.close = function () {
            if (modalInstance) {
                modalInstance.isShowModal = false;
                return;
            }
        }
    }
};
