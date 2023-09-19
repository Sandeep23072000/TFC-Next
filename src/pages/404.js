import React from 'react'
import Link from 'next/link'

const pageNotFound = () => {
  return (
    <>
      <div className="page-content bg-white">
		<div className="content-inner overflow-hidden pt-4 error-page" id="app-banner">
			<div className="container">
				<div className="inner-content text-center">
					<h1 className="error-head">404</h1>
					<h3 className="error-para">Opps! Page not Found</h3>
					<p>Sorry. The page you are looking for is not  found</p>
					<Link href="/" className="btn btn-md btn-primary btn-hover-1"><span>Back to Home</span></Link>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default pageNotFound
