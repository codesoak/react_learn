export const Home = () => {
    const number = 5
    return (
        <div>
            {
                number > 0 ?
                    <p>greater than zero</p>
                    :
                    <p>less than zero</p>
            }
        </div>
    )
}