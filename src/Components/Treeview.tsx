// import * as React from "react";
// import Box from "@mui/material/Box";
// import { styled, alpha } from "@mui/material/styles";
// import { SimpleTreeView, TreeItem, treeItemClasses } from "@mui/x-tree-view";

// const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
//   color:
//     theme.palette.mode === "light"
//       ? theme.palette.grey[800]
//       : theme.palette.grey[200],

//   [`& .${treeItemClasses.content}`]: {
//     borderRadius: theme.spacing(0.5),
//     padding: theme.spacing(0.6, 1),
//     margin: theme.spacing(0.2, 0),
//     [`& .${treeItemClasses.label}`]: {
//       fontSize: "0.8rem",
//       fontWeight: 500,
//     },
//   },
//   [`& .${treeItemClasses.iconContainer}`]: {
//     borderRadius: "50%",
//     backgroundColor:
//       theme.palette.mode === "light"
//         ? alpha(theme.palette.primary.main, 0.25)
//         : theme.palette.primary.dark,
//     color: theme.palette.mode === "dark" && theme.palette.primary.contrastText,
//     padding: theme.spacing(0, 1.2),
//   },
//   [`& .${treeItemClasses.groupTransition}`]: {
//     marginLeft: 15,
//     paddingLeft: 18,
//     borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
//   },
// }));

// export default function CustomStyling() {
//   return (
//     <Box sx={{ minHeight: 352, minWidth: 250 }}>
//       <SimpleTreeView defaultExpandedItems={["grid"]}>
//         {/* Students */}

//         <CustomTreeItem itemId="student" label="Students">
//           <CustomTreeItem itemId="student-community" label="Student Add/Edit" />
//           <CustomTreeItem itemId="student-pro" label="Student List" />
//           <CustomTreeItem itemId="student-premium" label="Transfer Student" />
//         </CustomTreeItem>
//         {/* Teacher */}

//         <CustomTreeItem itemId="teacher" label="Teacher">
//           <CustomTreeItem itemId="teacher-edit" label="Teacher Add/Edit" />
//           <CustomTreeItem itemId="teacher-list" label="Teacher List" />
//           <CustomTreeItem
//             itemId="teacher-allocation"
//             label="Teacher Allocation
// "
//           />

//           {/* Subjects */}

//         </CustomTreeItem>
//         <CustomTreeItem itemId="Subjects" label="Subjects">
//           <CustomTreeItem itemId="Subjects-edit" label="Subject Add/Edit" />
//           <CustomTreeItem itemId="Subjects-list" label="Subject List" />
//         </CustomTreeItem>

//         {/* Syllabus */}
//         <CustomTreeItem itemId="Syllabus" label="Syllabus">
//           <CustomTreeItem itemId="Syllabus-form" label="Syllabus Form" />
//           <CustomTreeItem itemId="Syllabus-list" label="Syllabus List " />
//         </CustomTreeItem>
//         {/* Class */}
//         <CustomTreeItem itemId="Class" label="Class">
//           <CustomTreeItem itemId="Class-form" label="Class Form" />
//           <CustomTreeItem itemId="Class-list" label="Class List " />
//         </CustomTreeItem>

//         {/* Fee */}
//         <CustomTreeItem itemId="fee" label="Fee">
//           <CustomTreeItem itemId="fee-structure" label="Fee Structure" />
//           <CustomTreeItem itemId="fee-submission" label="Fee Submission" />
//           <CustomTreeItem itemId="fee-voucher" label="Fee Voucher" />
//         </CustomTreeItem>
//         {/* Addmission */}
//         <CustomTreeItem itemId="Addmission" label="Addmission">
//           <CustomTreeItem itemId="addmission-screen" label="Admission Screen" />
//         </CustomTreeItem>

//         {/* Exam */}
//         <CustomTreeItem itemId="Exam" label="Exam">
//           <CustomTreeItem itemId="exam-schedule" label="Exam Schedule" />
//           <CustomTreeItem itemId="exam-result" label="Exam Result" />
//         </CustomTreeItem>
//       </SimpleTreeView>
//     </Box>
//   );
// }

///////////////////////////////

import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Route, useNavigate } from "react-router-dom";

export default function TreeViewScreen({ treeStructure }: any) {
  const randomId = () => {
    let id = Math.random().toString().slice(2);
    return id;
  };
  const navigate = useNavigate();

  const navigateScreen = (route: string) => {
    navigate(`/dashboard/${route}`);
  };

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        {treeStructure && treeStructure.length > 0
          ? treeStructure.map((x: any) => (
              <TreeItem itemId={randomId()} label={x.moduleName}>
                {x.child.map((y: any) => (
                  <TreeItem
                    onClick={() => {
                      navigateScreen(y.route);
                    }}
                    itemId={randomId()}
                    label={y.name}
                  />
                ))}
              </TreeItem>
            ))
          : null}
      </SimpleTreeView>
    </Box>
  );
}