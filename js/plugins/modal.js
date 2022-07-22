$.modal = function(options) {
    function _createModal(options) {
        const modal = document.createElement('div');
        modal.classList.add('wmodal');
        modal.insertAdjacentHTML("afterbegin", ` 
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">Темна бірюза</span>
                        <span data-close class="modal-close">&times;</span>
                    </div>
                    <div class="modal-body">
                        <img class="modal-body__img" src="./img/goods/female/t-shirt_blue.jpg" alt="Темна бірюза">
                        <p>Розмір 46-48 <br>Довжина виробу : 59 см  Колір : Темна бірюза  Колір яскравий,насичений.
                            Склад : 100% італійський котон
                            Добре пропускає повітря, дихає та добре вбирає вологу. Тому її цілком комфортно носити у спекотну пору року.
                            100 % італійський котон міцний,невибагливий у догляді,може використовуватися довгі роки.
                            Ручне прання при температурі не більше 30 градусів,сушити в горизонталі,щоб уникнути деформації виробу.</p>
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

    return {
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
}