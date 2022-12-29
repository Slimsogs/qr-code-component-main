import qrCode from '../images/qrCode.png';

const Main = () => {
    return(
        <div className='base'>
            <div className="card">
                <img src={qrCode} alt=""  className='card-pic'/>
                <div className='card-body'>
                    <h3>Improve your front-end skills by building projects</h3>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills
                        to the next level.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main