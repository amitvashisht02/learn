function Profile5({ person, size, isSepia, thickBorder}) {
    return (
        <div className="card">
            <Avatar 
            person={person}
            size={size}
            isSepia={isSepia}
            thickBorder={thickBorder}
            />
        </div>
    );
}