const CustomHTMLDanger = () => {

    return (
        <div dangerouslySetInnerHTML={{__html: "<img src='fake.gif' onload='console.log(1)'>"}} />
    );
};

export default CustomHTMLDanger;
