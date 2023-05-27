import './frame.css';
// import 'profile.jpg'from '../'
export default function Frame({img,description}) {

    return(
        <div className="totalFrame">
            <div className="outerFrame">
                <div className="innerFrame">
                    <img src={img} alt={description} className="profileImg" />
                </div>
            </div>
        </div>
    )
}