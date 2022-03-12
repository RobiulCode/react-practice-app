import React from 'react';

const Condition = ({condition,name}) => {

    return (
        <div className="mt-6">
                <div className="">
                    <h1 className='text-xl underline underline-2 decoration-indigo-400'>
                        What Is {name}?
                    </h1>
                        {
                            condition ?
                            <p className='text-justify'>
                                Tailwind CSS was originally developed by Adam Wathan and was first released on November 1st, 2017. It is a utility-first low-level framework in order to apply CSS. It means you won't need to write a lot of CSS. Instead, you will write numerous classes for your HTML elements.

                                The best thing about Tailwind CSS is that it is highly customizable. You can build custom designs and excellent custom user interfaces. Interestingly, it won't require extraordinary coding effort. You can easily leverage the styling of every single component separately in the way your UI demands. In addition, you can build unique micro-interactions that can be extended following the project requirements.

                                Tailwind CSS offers flexibility to transform the "look and feel" of the elements. You may think that it's not at all convenient to write a lot of classes. That's where component extraction comes. You can bundle these classes into one and name it as you want. It's similar to creating a Bootstrap-like framework.

                                These are some of the reasons why Tailwind CSS is drawing a lot of attention. While unlikely to rival Bootstrap, Tailwind CSS offers flexibility in exchange for time. However, it makes sense to build custom components without residing on code conflicts.
                            </p>
                            :
                            <p className='text-justify'>
                                Bootstrap was started as a branch of Twitter internal design tools in mid 2010, and it became an open-source framework on August 19th, 2011. It is based on Object-Oriented CSS. It is a semantic/component-based framework that helps to design and develop the website templates quickly.

                                Additionally, it is super easy to learn and maintain consistency across multiple devices and browsers. The responsive 12-column grid system, components, and layouts are just a matter of a few minor changes. You can do offsetting and nesting of columns in both fluid-width and fixed layouts. You can use responsive utility classes to hide or display certain content only on a specific screen size.
                                
                                In Bootstrap, all the fundamental HTML elements like headings, tables, buttons, lists, forms, etc., are pre-styled with base styling that can be quickly implemented. Bootstrap has got almost everything covered, be it drop-down menus, navigation bar, pagination, breadcrumbs, etc. If you know CSS, it will be super easy to customize them and build a decent website template.
                                
                                You can easily make user-interactive elements using numerous JavaScript plugins that are bundled in the bootstrap package. However, with proper documentation and a large community, Bootstrap is still considered a better option to get started.
                            </p>
                        }
                </div>
               
        </div>
    );
};

export default Condition;