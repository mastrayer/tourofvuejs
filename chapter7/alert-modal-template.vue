<!-- alert-modal-template.vue -->
<template>
    <transition name="modal">
        <div class="modal-mask" v-if="isShowModal">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">{{title}}</div>
                    <div class="modal-body">{{message}}</div>
                    <div class="modal-footer">
                        <button class="modal-default-button" @click="close">확인</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding-top: 50px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        margin-top: 0;
        font-weight: bold;
        font-size:0.95em;
    }

    .modal-body {
        margin: 16px 0 50px 0;
        font-size:0.95em;
    }

    .modal-default-button {
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: #333333;
        border: none;
        color: white;
        font-size:0.95em;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>


<script>
    export default {
        methods: {
            show: function(title, message) {
                this.isShowModal = true;
                this.title = title;
                this.message = message;
            },
            close: function() {
                this.isShowModal = false;
            }
        },
        data() {
            return{
                isShowModal: false,
                title: '알림',
                message: ''
            }
        }
    }
</script>
