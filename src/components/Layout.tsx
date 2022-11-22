/**
 * @field children is the element passed to the layout
 * @field maxWidth is the classname which defines the width of the content (using the predefined css classes that are based on root variables, like `max-width-1`)
 * @field containerClassname is the class attached to the top element. Default values add flex-center and padding
 * @field childClassname is an optional classname that can be attached to the children div
 */
interface PageLayoutProps {
    children: any
    maxWidth?: string
    containerClassname?: string
    childClassname?: string
}

/**
 * ContainerLayout has 2 util classes that are used
 * to center the content of the page to a specified
 * max-width, based on root variables and add padding
 * between the top and bottom
 * @example
  // Layout for page
  import { MainLayout, ContainerLayout } from 'src/layouts'
  BlogAuthorPage.getLayout = function getLayout(page: any) {
    return <ContainerLayout maxWidth="max-width-2">{page}</ContainerLayout>
  }
 */
export function ContainerLayout({
    children,
    maxWidth = 'max-width-1',
    containerClassname = 'flex-center global-page-content-padding',
    childClassname = '',
}: PageLayoutProps) {
    return (
        <div className={`${containerClassname}`}>
            <div className={`${maxWidth}`}>
                <div className={childClassname}>{children}</div>
            </div>
        </div>
    )
}