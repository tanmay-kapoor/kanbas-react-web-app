const AccountNavigation = () => {
    return (
        <div className="d-none d-md-block nav-2">
            <ul>
                <li>
                    <a className="color-red" href=".">
                        Notifications
                    </a>
                </li>
                <li className="active">
                    <a href="/kanbas/account/profile">Profile</a>
                </li>
                <li>
                    <a className="color-red" href=".">
                        Files
                    </a>
                </li>
                <li>
                    <a className="color-red" href=".">
                        Settings
                    </a>
                </li>
                <li>
                    <a className="color-red" href=".">
                        ePortfolio
                    </a>
                </li>
                <li>
                    <a className="color-red" href=".">
                        Shared Content
                    </a>
                </li>
                <li>
                    <a className="color-red" href=".">
                        The Hub
                    </a>
                </li>
                <li>
                    <a className="color-red" href=".">
                        Quickly Course Tools
                    </a>
                </li>
                <li>
                    <a className="color-red" href=".">
                        Global Announcements
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AccountNavigation;
