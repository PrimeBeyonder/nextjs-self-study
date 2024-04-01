import React from 'react'

function AboutLayput({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>About NavBar</nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default AboutLayput