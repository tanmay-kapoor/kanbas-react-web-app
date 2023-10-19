import ModuleList from "./modules/ModuleList";

const Home = () => {
    return (
        <>
            <ModuleList />

            <div class="col extra">
                <h6>Course Status</h6>

                <button class="btn kanbas-btn-gray">
                    <i class="fa fa-ban" aria-hidden="true"></i>Unpublish
                </button>
                <button class="btn custom-green ms-2">
                    <i class="fa fa-check-circle" aria-hidden="true"></i>Publish
                </button>

                <ul>
                    <li>
                        <a href=".">
                            <button class="btn kanbas-btn-gray">
                                Import Existing Content
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                            <button class="btn kanbas-btn-gray ">
                                Import From Commons
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                            <button class="btn kanbas-btn-gray ">
                                Choose Homepage
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                            <button class="btn kanbas-btn-gray ">
                                View Course Stream
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                            <button class="btn kanbas-btn-gray ">
                                New Announcements
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                            <button class="btn kanbas-btn-gray ">
                                New Analytics
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                            <button class="btn kanbas-btn-gray ">
                                View Course Notifications
                            </button>
                        </a>
                    </li>
                </ul>

                <h6>Comming Up</h6>
                <hr />
                <ul>
                    <li>
                        <a class="color-red" href=".">
                            Lecture CS4550 Sep 7 at 11:45am
                        </a>
                    </li>
                    <li>
                        <a class="color-red" href=".">
                            Lecture CS4550 Sep 11 at 11:45am
                        </a>
                    </li>
                    <li>
                        <a class="color-red" href=".">
                            CS5610 SP23 Lecture Sep 11 at 6pm
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Home;
