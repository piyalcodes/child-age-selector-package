
Run: `npm -i --save child-age-selector-package`

in your react component make a variable to set the display status of selector (E:g: childSelector) 

           `{
            childSelector && <ChildAgeSelector setChilds={setChilds} 
            childs={searchData.childs} 
            setChildSelector={setChildSelector}
            buttonClasses="btn btn-primary"
            labels={{
              dropDownLabel: "year(s) old",
              childrace: "Childrance",
              childLabel: "Child {number} is "
            }} />
          }`

you may use following methods in your component to work with the selector

 `const defaultData = {
    childs: []
  }`

  `const [childSelector, setChildSelector] = useState(false);`
  `const [searchData, setSearchData] = useState(defaultData)`


  `const setChilds = (childs) => {
    setSearchData({ ...searchData, childs: childs })
  }` 
  
  Style prop objects are allowed:
  
  `mainStyles and buttonStyles`
 
 If you use bootstrap, you will be able to easily handle styles