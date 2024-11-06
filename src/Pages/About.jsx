import { Link } from "react-router-dom";

export default function About(params) {
    
    return(
        <div className="px-16 py-10 overflow-auto text-xl h-max">
            <div>
                Hello, allow me to introduce myself. My name is Eduardo Brilliandy - people usually call me Edo!<br/>
                <br/>
                I have a passion and interest in Computer Science and Programming. 
                I am always motivated to learn more and gain more experience in these fields. 
                I have challenged myself multiple times and will keep pushing through boundaries to learn more.<br/>
                <br/>
            </div>

            <div>
                <div>
                    You can find me on
                </div>

                <div className="pl-8 grid grid-cols-2 lg:w-1/2">
                    <div>
                        LinkedIn:
                    </div>
                    <div>
                        <Link to="https://www.linkedin.com/in/eduardo-brilliandy/" target="_blank" rel="noopener noreferrer">Eduardo Brilliandy</Link>
                    </div>

                    <div>
                        Instagram: 
                    </div>
                    <div>
                        <Link to="https://www.instagram.com/edo_brilliandy/" target="_blank" rel="noopener noreferrer">edo_brilliandy</Link>
                    </div>

                    <div>
                        WhatsApp:
                    </div>
                    <div>
                        081779991235
                    </div>

                    <div>
                        Email:
                    </div>
                    <div>
                        edobrilliandy@gmail.com
                    </div>

                    <div>
                        GitHub:
                    </div>
                    <div>
                    <Link to="https://github.com/edotheepic" target="_blank" rel="noopener noreferrer">edotheepic</Link>
                    </div>

                </div>
            </div>
        </div>
    )
};
