const fruits = [
    {id:1, title: 'Яблоки', price: 20, img:'./img/goods/female/t-shirt_blue.jpg'}, 
    {id:2, title: 'Апельсины', price: 30, img:'./img/goods/female/t-shirt_yellow.jpg'}, 
    {id:3, title: 'Манго', price: 40, img:'./img/goods/female/t-shirt_pink.jpg'}
];

const toHTML = fruit => `
    <div class="col">
    <div class="card">
        <img class="carf-img-top" style="height: 300px;" src="${fruit.img}" alt="${fruit.title}">
        <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a href="#" class="btn btn-primary">Посмотреть цену</a>
            <a href="#" class="btn btn-danger">Удалить</a>
        </div>
    </div>
</div>
`;

function render() {
    const html = 
    document.querySelector('#fruits').innerHTML = html;

}

const modal = $.modal({
    title: 'Test Window',
    closable: true,
    content: `
    <h4>Modal is working</h4>
    <p>lorem  ipsum and so on</p>
    `,
    width: '400px',
    footerButtons:[
        {text: 'Ok', type: 'primary', handler(){
            console.log("Primary clicked");
            modal.close();
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log("Danger clicked");
            modal.close();
        }}
    ]
});
