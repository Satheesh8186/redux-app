
import { LevelContext } from "./levelContext";
import {useContext} from "react";
export default function Section({children}){
    let level = useContext(LevelContext)
    return(
        <div>
            <section className="section">
                <LevelContext.Provider value={level + 1}>
                {children}
                </LevelContext.Provider>
                
            </section>
        </div>
    )
}