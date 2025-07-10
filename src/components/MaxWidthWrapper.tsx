import React from "react";

function MaxWidthWrapper({children, className="",style}: { children: React.ReactNode, className?: string,style?: React.CSSProperties }) {
    return (
        <div className={`w-full max-w-[1240px] mx-auto px-2.5 sm:px-5 md:px-6 xl:px-0 ${className}`} style={style}>
            {children}
        </div>
    );
}

export default MaxWidthWrapper;