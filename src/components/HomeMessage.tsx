export const HomeMessage = () => {
    return (
        <div
            style={{
                fontFamily: 'Open Sans',
                fontSize: '24px',
                paddingTop: '100px',
            }}
        >
            I am a frontend boilerplate app built with{' '}
            <code>yarn create react-app my-app --template typescript</code>.
            <br />
            I come complete with serviceable routing modularity, as well as a
            template for <br />
            creating small pockets of state management using React's context
            API.
            <br />
            You can demo the state management implemented here right now by
            clicking the button to change the color!
        </div>
    );
};
