import template from './toast.tpl.html!text';

/**
 * Supplies a function that will continue to operate until the
 * time is up.
 */

/**
 * Controller
 */
class ToastService {

    /**
     * Toast service: exibe notificações no estilo toasts
     *
     * @constructor
     *
     * @param {Object} $mdToast - $mdToast service do angular-material
     *
     * @returns {void}
     */
    constructor( $mdToast ) {
        this.$mdToast = $mdToast;
    }

    /**
     * Exibe notificação
     *
     * @param {Object} displayOption - opções de exibição do toast usados para preencher a view
     *
     * @returns {Promise} - retorna uma promise
     */
    show( displayOption ) {
        return this.$mdToast.show( {
            controller: 'toastController',
            controllerAs: 'vm',
            template: template,
            hideDelay: 800,
            position: 'bottom right',
            locals: {
                displayOption: displayOption
            }
        } );
    }

    /**
     * Esconde o toast
     *
     * @returns {Promise} - retorna uma promise
     */
    hide() {
        return this.$mdToast.hide();
    }

    /**
     * Exibe toast de sucesso
     *
     * @param {Object} displayOption - Opções passadas para a view
     *
     * @returns {Promise} - retorna uma promise
     */
    success( displayOption ) {
        return this.show( angular.merge( displayOption, { type: 'success' } ) );
    }

    /**
     * Exibe toast de erro
     *
     * @param {Object} displayOption - Opções passadas para a view
     *
     * @returns {Promise} - retorna uma promise
     */
    error( displayOption ) {
        return this.show( angular.merge( displayOption, { type: 'error' } ) );
    }

    /**
     *
     * @param {Object} displayOption - Opções passadas para a view
     *
     * @returns {Promise} - retorna uma promise
     */
    info( displayOption ) {
        return this.show( angular.merge( displayOption, { type: 'info' } ) );
    }

    /**
     *
     * @param {Object} displayOption - Opções passadas para a view
     *
     * @returns {Promise} - retorna uma promise
     */
    warn( displayOption ) {
        return this.show( angular.merge( displayOption, { type: 'info' } ) );
    }
}

export default [
    '$mdToast', ToastService
];
