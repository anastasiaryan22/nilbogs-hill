
import SignupLoginPage from "../components/SignupLoginPage"

const users = [
    {
        username: 'amryan',
        password: '123wink123'

    },

    {
        username: 'kjebrannen',
        password: '123why123'
    }

]




export default function SignupLogin() {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, width: '100%', height: '100%', marginLeft: '-8px' }}>
        {(<SignupLoginPage username={users.username} password={users.password}></SignupLoginPage>)};
    </div>
}