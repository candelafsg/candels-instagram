import './postButton.css'
import { Button } from '../../../components/button/Button.jsx'


export const PostButtonState = () => {
    return (
        <div style={{
            width:'1080px',
            height:'1350px',
            border:'2px solid black',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>

            <div className="buttons-container">
                <Button variant="primary">DEFAULT</Button>
                <Button  variant="primary">HOVER</Button>
                <Button  variant="primary">PRESSED</Button>
            </div>
        </div>
    )
}

export default PostButtonState
