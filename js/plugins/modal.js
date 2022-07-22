$.modal = function(options) {
    
    function _createModal(options) {
        const DEFAULT_WIDTH = "800px";
        const modal = document.createElement('div');
        modal.classList.add('wmodal');
        modal.insertAdjacentHTML("afterbegin", ` 
            <div class="modal-overlay" data-close="true">
                <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                    <div class="modal-header">
                        <span class="modal-title">${options.title || 'Окно'}</span>
                        ${options.closable ? `<span data-close="true" class="modal-close">&times;</span>` : ''}
                    </div>
                    <div class="modal-body">
                        <img class="modal-body__img" src="./img/goods/female/t-shirt_blue.jpg" alt="Темна бірюза">
                        ${options.content || ''}
                    </div>
                    <div class="modal-footer">
                        <button>Ok</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal);
        return modal
    }

    const $modal = _createModal(options);
    const ANIMATION_SPEED = 200;
    let closing = false;

    const modal = {
        open(){
            !closing && $modal.classList.add('open'); 
        },
        close() {
            closing = true;
            $modal.classList.remove('open'); 
            $modal.classList.add('hidding'); 
            setTimeout(() =>{
                $modal.classList.remove('hidding'); 
                closing = false;
            }, ANIMATION_SPEED);
        },
        destroy() {}
    }

    $modal.addEventListener('click', event => {
        console.log('Clicked', event.target.dataset.close);
        if(event.target.dataset.close){
            modal.close();
        }
    })

    return modal
}