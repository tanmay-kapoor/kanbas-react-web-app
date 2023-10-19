import { useParams } from 'react-router';
import DB from '../../Database/index.js'

const ModuleList = () => {
    const {courseId} = useParams();
    const {modules} = DB;
    const courseModules = modules.filter((module) => module.course === courseId);
    console.log(courseModules);
  return (
    courseModules.length === 0 ? 
    <div className="col-xs-12 col-md-8 alert alert-danger height-100" role="alert">
        No modules published for this course
    </div>
    :
    <div className="col-xs-12 col-md-8">
        <div className="button-bar">
            <button className="btn kanbas-btn-gray">Collapse All</button>
            <button className="btn kanbas-btn-gray ms-2">View Progress</button>
            <select className="form-select color-gray inline width-auto ms-2">
                <option selected>Publish All</option>
            </select>
            <button className="btn kanbas-red-btn ms-2"> + Module</button>
        </div>
        
        <hr className="mt-2 mb-2"/>
        
        {
            courseModules.map((module, index) => { return (
                <ul key={index} className="list-group new-module">
                <li className="list-group-item list-group-item-secondary">
                    {module.name} - {module.description}
                    <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                    <i className="fa fa-plus float-end ms-3" aria-hidden="true"></i>
                    <i className="fa fa-caret-down float-end ms-1" aria-hidden="true"></i>
                    <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                </li>

                {
                    module.contents && module.contents.map((content) => {
                    if (!content.topics || !content.topics.length) {
                        return (<></>)
                    }

                    return (
                        <>
                        <li className="list-group-item sub-heading"> 
                            {content.heading}
                            <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                            <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                        </li>

                        {
                            content.topics && content.topics.map(topic => {
                            if(topic.link) {
                                return (
                                <li className="list-group-item">
                                    <a href={topic.link} target="_blank" rel="noopener noreferrer" className="link color-red">
                                    <i className="fa fa-link" style={{color: "rgb(140, 138, 138)"}} aria-hidden="true"></i>
                                    {topic.name}
                                    <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                                    <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                                    </a>
                                </li>
                                )
                            }
                            else {
                                return (
                                <li className="list-group-item">
                                    {topic.name}
                                    <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                                    <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                                </li>
                                )
                            }
                            })
                        }
                        </>
                    )
                    })
                }
                </ul>
            )})
        }
    </div>
  )
}

export default ModuleList