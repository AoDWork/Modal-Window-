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
            console.log("Primary clicked")
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log("Danger clicked")
        }}
    ]
});
