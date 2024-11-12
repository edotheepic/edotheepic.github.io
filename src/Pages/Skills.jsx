import SkillBox from "../components/SkillBox";

const prog_list = [
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "HTML",
    "CSS",
    "Javascript",
    "PHP",
    "SQL",
    "Laravel",
    "Java Spring Boot",
    "React",
    "Angular",
    "Machine Learning",
    "Deep Learning",   
]

const lang_list = [
    "Bahasa Indonesia",
    "English",
]

const soft_list = [
    "Teamwork",
    "Communication",
    "Project Management",
    "Problem Solving",
    "Time management",
]

export default function Skills(params) {
    
    return(
        <div className="animate-appear">
            
            <div className="pb-4">
                <div className="text-2xl border-b font-semibold uppercase">
                    Programming Skills
                </div>
                <div className="flex flex-wrap py-2">
                    {prog_list.map((title, index) => (

                        <SkillBox key={index} content={title}/>
                        
                    ))}
                </div>
            </div>
            <div className="pb-4">
                <div className="text-2xl border-b font-semibold uppercase">
                    Language Skills
                </div>
                <div className="flex flex-wrap py-2">
                    {lang_list.map((title, index) => (

                        <SkillBox key={index} content={title}/>
                        
                    ))}
                </div>
            </div>

            <div className="pb-4">
                <div className="text-2xl border-b font-semibold uppercase">
                    Soft Skills
                </div>
                <div className="flex flex-wrap py-2">
                    {soft_list.map((title, index) => (

                        <SkillBox key={index} content={title}/>
                        
                    ))}
                </div>
            </div>
        </div>
    )
};
