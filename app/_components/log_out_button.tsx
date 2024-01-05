"use client"

import {signOut} from "next-auth/react"

const SignOutButton = () => {
	return <div>
<button onClick={() => signOut()}>Log Me Out</button>
	</div> 
}

export default SignOutButton;
