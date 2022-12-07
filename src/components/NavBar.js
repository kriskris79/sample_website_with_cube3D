import Button from 'react-bootstrap/Button';

function NavBar() {
    return (

        <>
            <div className="navbar2">

                <Button variant="outline-primary" a className="buttonsStyle" href="../main">Main</Button>{' '}
                <Button variant="outline-primary" a className="buttonsStyle" href="../contact">Contact</Button>{' '}
                <Button variant="outline-primary" a className="buttonsStyle" href="../blog">Blog</Button>{' '}

<div className="navbar-text"> KrisLens Wedding Photographer/Kent/UK
</div>


            </div>
        </>
    );
}

export default NavBar;

//OutlineTypesExample