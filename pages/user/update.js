import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Link from 'next/link';

const UserProfileUpdate = () => {
    return (
        <Layout>
            <Private>
                <div className="container  pt-5 mb-5" style={{backgroundColor:"#f2f2f2",borderRadius:"10px"}}>
                    <div className="row">
                        <ProfileUpdate />
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserProfileUpdate;