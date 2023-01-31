import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import "./styles.css"

export const NavigationMenuBar = () => {
    return (
        <NavigationMenu.Root className="root">
            <NavigationMenu.List className="menu-list">
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="trigger">
                        about us <CaretDownIcon aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="content" >
                        <p style={{ paddingRight: "1rem" }}> brand philosophy </p>
                        <p> product technology </p>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="trigger">
                        our product <CaretDownIcon aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="content" >
                        <p> all product </p>
                        <p> intibiome wellness</p>
                        <p> intibiome active</p>
                        <p> intibiome agecare</p>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="trigger">
                        intimate health <CaretDownIcon aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="content" >
                        <p> all product </p>
                        <p> intibiome wellness</p>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="trigger">
                        contact us
                    </NavigationMenu.Trigger>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}
