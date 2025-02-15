import React, {Profiler} from "react";

const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`id:${id}, phase:${phase}, Render Time: ${actualDuration}`)
}


const ProfilerComponent = () => (
        <Profiler id="MyComponent" onRender={onRenderCallback}>
            <h2> Hello React Profiler</h2>
        </Profiler>
)
export default ProfilerComponent;