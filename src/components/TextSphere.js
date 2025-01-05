import React, {useEffect} from "react";
import "./styles/TextSphere.css"; 

//Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
    useEffect(()=>{
        return()=>{
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "MongoDB",
                "NodeJS",
                "Flask",
                "SQL",
                "Python",
                "GIT",
                "GITHUB",
            ];

            const options = {
                radius: 300,
                maxspeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

 // Initialize TagCloud
 const tagCloud = TagCloud(container, texts, options);

 // Cleanup to avoid memory leaks
 return () => tagCloud.destroy();        }
    },[]);

    return(
        <div>
            <div className="text-sphere">
                <span className="tagcloud"></span>
            </div>
        </div>
    );
};

export default TextSphere;