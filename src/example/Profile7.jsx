import Avatar3 from "./Avatar3";


function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile7() {
    return (
        <Card>
            <Avatar3 
            size={100}
            person={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
            }}
            />
        </Card> 
    );
}