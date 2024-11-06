import pic from "../assets/pic.jpeg"

export default function ProfilePicture(params) {
    

    return(
        <div className="w-3/4">
            <img src={pic} alt="Profile Picture" className="w-full aspect-square object-cover rounded-full border-4"/>
        </div>
    )
};
