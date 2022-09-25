// in src/User.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  useNotify,
  useRedirect,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  NumberInput,
  NumberField,
  DateField,
  DateInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
  BooleanInput,
  BooleanField,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  email,
  Form,
  SaveButton,
  Toolbar,
  ShowButton,
  EditButton,
  DeleteButton,
  useRecordContext,
  DeleteWithConfirmButton,
  SimpleList,
  ShowBase,
} from "react-admin";
import {
  CreateButton,
  ExportButton,
  TopToolbar,
  ListButton,
} from "react-admin";
import useMediaQuery from "@mui/material/useMediaQuery";
import Calculator from "./Calculator";
import {
  ListSubheader,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);
import Tcredits from "./Calculator";

export const UserList = (props) => (
  <List exporter={false} {...props} filters={<UserFilter />}>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="age" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="age" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="createdate" />
      <TextInput disabled source="lastupdate" />
      <TextInput source="name" />
      <TextInput source="age" />
    </SimpleForm>
  </Edit>
);

export const calciList1 = (props) => (
  <List {...props}>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const PostListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const calciList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const record = useRecordContext();
  return (
    <>
      <div>
        <CardContent></CardContent>
        <Card
          sx={{
            mt: 4,
            ml: 1,
            width: "100%",
            alignSelf: "center",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontWeight: 500, fontSize: "1.5rem" }}
              color="text.primary"
              gutterBottom
            >
              Click on Create button and Enter the obtained marks for 50 in CIE.
            </Typography>
            <Typography sx={{ mt: 2 }} color="text.secondary">
              Once that is done check your Grades here:{" "}
              <Link
                sx={{ fontWeight: 600, fontStyle: "Didot" }}
                href="#/calculator"
                underline="none"
              >
                {"Grades"}
              </Link>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href="#/calci/create"
              size="medium"
              variant="contained"
              boxShadow="1"
              color="primary"
              sx={{ ml: 1, mr: 1, mb: 2 }}
            >
              Create
            </Button>
          </CardActions>
        </Card>
      </div>
      <List {...props} sx={{ mt: 2 }} actions={<PostListActions />}>
        {isSmall ? (
          <SimpleList
            sx={{
              borderRadius: "0.5rem",
              boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
            }}
            linkType="show"
            primaryText={(record) => <b>{record.name}</b>}
            secondaryText={(record) => `Created By: ${record.createdby}`}
            leftAvatar={(record) => (record.avatar ? record.avatar : null)}
          />
        ) : (
          <Datagrid
            bulkActionButtons={false}
            rowClick="show"
            sx={{
              borderRadius: "0.5rem",
              boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
            }}
          >
            <TextField sx={{ fontWeight: "bold" }} source="name" />
            <ShowButton sx={{ fontWeight: "bold" }} label="Show" />
            <EditButton sx={{ fontWeight: "bold" }} label="Edit" />
            <DeleteWithConfirmButton
              confirmContent="You will not be able to recover this record. Are you sure?"
              label="Delete"
              translateOptions={(record) => record.name}
              redirect={false}
            />
          </Datagrid>
        )}
      </List>
    </>
  );
};

export const calciShow1 = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField sx={{ fontWeight: "bold" }} source="name" />
      <NumberField source="Maths" />
      <TextField source="MathsGrade" />
      <NumberField source="Chemistry" />
      <TextField source="ChemistryGrade" />
      <NumberField source="CProgramming" />
      <TextField source="CProgrammingGrade" />
      <NumberField source="Electronics" />
      <TextField source="ElectronicsGrade" />
      <NumberField source="Mechanical" />
      <TextField source="MechanicalGrade" />
      <NumberField label="AEC" source="AEC" />
      <TextField source="AECGrade" />
    </SimpleShowLayout>
  </Show>
);
export const calciShow = (props) => {
  const record = useRecordContext();

  return (
    <>
      <Box sx={{ width: "full", margin: "1em" }}>
        <Typography variant="h6">Instructions</Typography>
        <Typography variant="body2">
          <b>
            Enter the Average Marks of CIE for 50 and Predicted grade from the
            Calculator
          </b>
        </Typography>
      </Box>
      <ShowBase resource="calci">
        <div>
          <SimpleShowLayout
            sx={{
              mt: 4,
            }}
          >
            <TextField
              sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              source="name"
            />
          </SimpleShowLayout>
          <EditButton label="Edit" />
          <DeleteButton label="Delete" />
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <NumberField source="Maths" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <TextField source="MathsGrade" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <NumberField source="Chemistry" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <TextField source="ChemistryGrade" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <NumberField source="CProgramming" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <TextField source="CProgrammingGrade" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <NumberField source="Electronics" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <TextField source="ElectronicsGrade" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <NumberField source="Mechanical" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <TextField source="MechanicalGrade" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <NumberField label="AEC" source="AEC" />
            </SimpleShowLayout>
          </Grid>
          <Grid item xs={6}>
            <SimpleShowLayout>
              <TextField label="AEC Grade" source="AECGrade" />
            </SimpleShowLayout>
          </Grid>
        </Grid>
      </ShowBase>
    </>
  );
};
const Aside = () => (
  <Box sx={{ width: "200px", margin: "1em" }}>
    <Typography variant="h6">Instructions</Typography>
    <Typography variant="body2">
      Enter the Average Marks of CIE for 50 and Predicted grade from the
      calculator
    </Typography>
  </Box>
);

export const calciCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = (data) => {
    notify(`Changes saved`);
    redirect(`/calculator`);
  };
  return (
    <>
      <Box sx={{ width: "full", margin: "1em" }}>
        <Typography variant="h6">Instructions</Typography>
        <Typography variant="body2">
          <b>
            Enter the Average Marks of CIE for 50 and Predicted grade from the
            Calculator, After entering click on Save.
          </b>
        </Typography>
      </Box>
      <Create {...props} mutationOptions={{ onSuccess }}>
        <SimpleForm
          sx={{
            borderRadius: "0.5rem",
            boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
            mb: "4rem",
            mt: "20px",
          }}
        >
          <Typography variant="h7">
            <b>
              Name can be anything but while checking grades select the Name
              that you input here
            </b>
          </Typography>
          <TextInput source="name" />
          <NumberInput min={0} max={50} source="Maths" />
          <NumberInput min={0} max={50} source="Chemistry" />
          <NumberInput min={0} max={50} source="CProgramming" />
          <NumberInput min={0} max={50} source="Electronics" />
          <NumberInput min={0} max={50} source="Mechanical" />
          <NumberInput min={0} max={50} label="AEC" source="AEC" />
          <Typography variant="h7">
            <b>Enter the grades after checking the table</b>
          </Typography>
          <SelectInput source="MathsGrade" choices={choices} />
          <SelectInput source="ChemistryGrade" choices={choices} />
          <SelectInput source="CProgrammingGrade" choices={choices} />
          <SelectInput source="ElectronicsGrade" choices={choices} />
          <SelectInput source="MechanicalGrade" choices={choices} />
          <SelectInput source="AECGrade" label="AEC Grade" choices={choices} />
        </SimpleForm>
      </Create>
    </>
  );
};
const choices = [
  { id: "O", name: "O" },
  { id: "A+", name: "A+" },
  { id: "A", name: "A" },
  { id: "B+", name: "B+" },
  { id: "B", name: "B" },
];

export const calciEdit = (props) => (
  <Edit {...props}>
    <SimpleForm
      sx={{
        borderRadius: "0.5rem",
        boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
        mb: "4rem",
      }}
    >
      <TextInput sx={{ fontWeight: "bold" }} source="name" />
      <NumberInput min={0} max={50} source="Maths" />
      <NumberInput min={0} max={50} source="Chemistry" />
      <NumberInput min={0} max={50} source="CProgramming" />
      <NumberInput min={0} max={50} source="Electronics" />
      <NumberInput min={0} max={50} source="Mechanical" />
      <NumberInput min={0} max={50} label="AEC" source="AEC" />
      <SelectInput source="MathsGrade" choices={choices} />
      <SelectInput source="ChemistryGrade" choices={choices} />
      <SelectInput source="CProgrammingGrade" choices={choices} />
      <SelectInput source="ElectronicsGrade" choices={choices} />
      <SelectInput source="MechanicalGrade" choices={choices} />
      <SelectInput source="AECGrade" label="AEC Grade" choices={choices} />
    </SimpleForm>
  </Edit>
);
