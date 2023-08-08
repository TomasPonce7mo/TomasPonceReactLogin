import React from 'react'

export const g = () => {
  return (
    <>
    
    <form className="loginForm flex" id="loginForm" onSubmit={handleFormSubmit}>
                <div className="form-field grid">
                    <Text type="h3" style_type="text-title" size="text-large" style_transform="text-capitalize" styles_color="text-white" content="Login" />
                </div>
                <div className="form-field flex">
                    <Text type="label" style_type="text-label" size="text-auto" style_transform="text-capitalize" styles_color="text-white" content="Username" />
                    <Input type="text" styles="input input-dark" name="userName" size="input-auto" />
                    <Text type="label" style_type="text-label" size="text-auto" style_transform="text-capitalize" styles_color="text-white" content="Password" />
                    <Input type="password" styles="input input-dark" name="password" size="input-auto" />
                    <Link link_type="form-link" styles_color="link-grey" link_class="ml-auto" link_content="Forgot password?" />
                    <Button type="submit" styles="btn btn-violet" size="btn-auto" value="Sign In" />
                </div>
                <div className="form-field grid">
                    <div className="ctn-social grid">
                        <Text type="label" style_type="text-label" size="text-auto" style_transform="text-capitalize" styles_color="text-white" content="Login with social accounts" />
                    </div>
                    <div className="ctn-social flex">
                        <Icon name_icon="google" />
                        <Icon name_icon="twitter" />
                        <Icon name_icon="github" />
                    </div>
                    <div className="ctn-social">
                        <Text type="label" style_type="text-label" style_transform="text-capitalize" styles_color="text-white" content="Don't have an account? " size="text-small" />
                        <Link link_type="form-link" styles_color="link-grey" link_class="ml-auto" link_content="Sing Up" />
                    </div>
                </div>
            </form>

    </>
  )
}
