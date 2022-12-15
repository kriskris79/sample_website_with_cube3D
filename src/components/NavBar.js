import Button from 'react-bootstrap/Button';

function NavBar() {
    return (

        <>
            <div className="navbar2">

                <Button variant="outline-primary"  className="buttonsStyle" href="#main">Main</Button>{' '}
                <Button variant="outline-primary"  className="buttonsStyle" href="#cube">3D Cube</Button>{' '}
                <Button variant="outline-primary"  className="buttonsStyle" href="#blog">Blog</Button>{' '}
                <Button variant="outline-primary"  className="buttonsStyle" href="#contact">Contact</Button>{' '}


                <div className="navbar-text">
                    KrisLens Wedding Photographer/Kent/UK
                </div>



            </div>
        </>
    );
}

export default NavBar;



