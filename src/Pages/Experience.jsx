import SkillBox from "../components/SkillBox";

export default function Experience(params) {
    
    return(
        <div className="animate-appear">
            <div className="flex">
                <div className="flex flex-col items-center">
                    <div className="mx-4 w-10 aspect-square bg-white rounded-full"/>
                    <div className="mx-4 flex h-full w-0 border"/>
                </div>
                <div className="pb-8">
                    <div className="font-bold text-2xl pb-2">
                        Application Developer Intern
                    </div>

                    <div className="text-xl mb-2">
                        PT Bank Central Asia Tbk (BCA)
                    </div>

                    <div className="text-lg mb-2">
                        Sep 2023 - Feb 2024 (6 months)
                    </div>

                    <div className="pl-2 pr-10 ml-2 mb-2 border-l">
                        Train AI models to make forecast predictions based on company data using Python.
                        Create a small dashboard app  to display predicted data using Java Spring Boot & Angular.
                        Create Bash scripts for CICD automation.
                        Perform software testing.
                    </div>


                    <div className="flex flex-wrap">
                        <SkillBox content="Python"/>
                        <SkillBox content="Machine Learning"/>
                        <SkillBox content="Deep Learning"/>
                        <SkillBox content="Java Spring Boot"/>
                        <SkillBox content="Angular"/>
                        <SkillBox content="Bash"/>
                        <SkillBox content="Linux"/>
                        <SkillBox content="Project Management"/>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row">
                <div className="flex flex-col items-center">
                    <div className="mx-4 w-10 aspect-square bg-white rounded-full"/>
                    <div className="mx-4 flex h-full w-0 border"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-2xl pb-2">
                        Activist
                    </div>

                    <div className="text-xl mb-2">
                        Binus Game Development Club
                    </div>

                    <div className="text-lg mb-2">
                        March 2022 - Feb 2023 (1 year)
                    </div>

                    <div className="pl-2 pr-10 ml-2 mb-2 border-l text-left">
                        Teach Beginner Game Programming using Unity.
                        Help coordinate Club events such as Freshman Expo & Club Welcoming Party.
                    </div>


                    <div className="flex flex-wrap">
                        <SkillBox content="Unity"/>
                        <SkillBox content="C#"/>
                        <SkillBox content="Communication"/>
                        <SkillBox content="Teamwork"/>
                    </div>
                </div>
            </div>

        </div>
    )
};
