const Profile = ({ user }) => {
    function renderAchievements() {
        if (user.achievements.length !== 0) {
            user.achievements.map(achievement => {
                return <div>{achievement.achievement_name}: {achievement.achievement_description}</div>
            })
        } else {
            return <div>No achievements yet. Make more matches!</div>
        }
    }

    function renderBio() {
        if (user.bio) {
            return user.bio
        } else {
            return "Anonymous"
        }
    }
    return (
        <div>
            <div className="profile">
                <img src={user.image_url} alt="Profile Picture" width="100px" height="100px"></img>
                <div>
                    {user.username}
                </div>
                <div>
                    Bio: {renderBio()}
                </div>
            </div>
            <div className="achievements">
                Achievements
                {renderAchievements()
                }
            </div>
        </div>
    );
}

export default Profile;
