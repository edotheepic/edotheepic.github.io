import SkillBox from "../components/SkillBox";

export default function Skills(params) {
    
    return(
        <div className="animate-appear">
            
            <div className="pb-4">
                <div className="text-2xl border-b font-semibold uppercase">
                    Programming Skills
                </div>
                <div className="flex flex-wrap py-2">
                    <SkillBox content="Python"/>
                    <SkillBox content="Java"/>
                    <SkillBox content="C"/>
                    <SkillBox content="C++"/>
                    <SkillBox content="C#"/>
                    <SkillBox content="HTML"/>
                    <SkillBox content="CSS"/>
                    <SkillBox content="Javascript"/>
                    <SkillBox content="PHP"/>
                    <SkillBox content="SQL"/>
                    <SkillBox content="Laravel"/>
                    <SkillBox content="Java Spring Boot"/>
                    <SkillBox content="React"/>
                    <SkillBox content="Angular"/>
                    <SkillBox content="Machine Learning"/>
                    <SkillBox content="Deep Learning"/>
                </div>
            </div>
            <div className="pb-4">
                <div className="text-2xl border-b font-semibold uppercase">
                    Language Skills
                </div>
                <div className="flex flex-wrap py-2">
                    <SkillBox content="Bahasa Indonesia"/>
                    <SkillBox content="English"/>
                </div>
            </div>

            <div className="pb-4">
                <div className="text-2xl border-b font-semibold uppercase">
                    Soft Skills
                </div>
                <div className="flex flex-wrap py-2">
                    <SkillBox content="Teamwork"/>
                    <SkillBox content="Communication"/>
                    <SkillBox content="Project Management"/>
                    <SkillBox content="Problem Solving"/>
                    <SkillBox content="Time management"/>
                </div>
            </div>
        </div>
    )
};
