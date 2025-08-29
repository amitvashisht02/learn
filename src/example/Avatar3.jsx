import { getImageUrl } from "./utils";


export default function Avatar3({ person, size }) {
    return (
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size} 
        />
    );
}