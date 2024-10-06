import React, { useState } from "react";
import {
    Container,
    Box,
    Tabs,
    Tab,
    Typography,
    Paper,
    Avatar,
    IconButton,
    Divider,
    Grid,
    TextField,
    Button,
    Alert,
    Snackbar,
    Switch,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SettingPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        firstName: "Roman",
        lastName: "Khan",
        email: "roman@gmail.com",
        contact: "+92 3482298174",
        branch: "Nazimabad",
        role: "Senior Manager",
    });
    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [passwordError, setPasswordError] = useState("");
    const [passwordSuccess, setPasswordSuccess] = useState("");
    const [teamMembers, setTeamMembers] = useState([
        { name: "Roman", role: "Developer", photo: "https://media.licdn.com/dms/image/v2/D4D03AQH02KffaI4vSQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1700826594426?e=1731542400&v=beta&t=tQMIKarsTbMnAGQlYE9BH8yJrCh80l7QY9zUYJCHYZ0", editing: false },
        { name: "Umer", role: "Leader", photo: "", editing: false },
        { name: "Mahad", role: "Cashier", photo: "https://media.licdn.com/dms/image/v2/D4D35AQHAs2hju9xKsA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1726223012699?e=1726858800&v=beta&t=UkgnXJcfrqLIPolR4UdJ9pxnUm1d5aFE9T6MrxwQmwA", editing: false },
        { name: "Naveed", role: "Head of Chef", photo: "https://media.licdn.com/dms/image/v2/D4E03AQFW1ZLdcPWH6Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1708558966152?e=1731542400&v=beta&t=t4dhHbeeyK43Fm94z59Qq71mc_pP5AlXl8VBDSEmZMc", editing: false },
        { name: "Faraz", role: "Stock Manager", photo: "", editing: false },
    ]);
    const [plans, setPlans] = useState("Review and finalize the project plan for next month.");
    const [isEditingPlans, setIsEditingPlans] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleSaveClick = () => {
        setIsEditing(false);

    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handlePasswordChange = (event) => {
        const { name, value } = event.target;
        setPasswords((prevPasswords) => ({
            ...prevPasswords,
            [name]: value,
        }));
    };

    const validateAndChangePassword = () => {
        const { currentPassword, newPassword, confirmPassword } = passwords;

        // Validate passwords
        if (!currentPassword || !newPassword || !confirmPassword) {
            setPasswordError("All fields are required.");
            setPasswordSuccess("");
            return;
        }
        if (newPassword.length < 8) {
            setPasswordError("New password must be at least 8 characters long.");
            setPasswordSuccess("");
            return;
        }
        if (newPassword !== confirmPassword) {
            setPasswordError("New password and confirm password do not match.");
            setPasswordSuccess("");
            return;
        }

        // Simulate password change success
        setPasswordError("");
        setPasswordSuccess("Password changed successfully!");
        setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
    };

    const handleTeamMemberEdit = (index) => {
        setTeamMembers((prevMembers) =>
            prevMembers.map((member, i) =>
                i === index ? { ...member, editing: true } : member
            )
        );
    };

    const handleTeamMemberSave = (index) => {
        setTeamMembers((prevMembers) =>
            prevMembers.map((member, i) =>
                i === index ? { ...member, editing: false } : member
            )
        );

        addNotification(`Team member ${teamMembers[index].name}'s details updated.`);
    };

    const handleTeamMemberChange = (index, field, value) => {
        setTeamMembers((prevMembers) =>
            prevMembers.map((member, i) =>
                i === index ? { ...member, [field]: value } : member
            )
        );
    };

    const handlePhotoChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTeamMembers((prevMembers) =>
                    prevMembers.map((member, i) =>
                        i === index ? { ...member, photo: reader.result } : member
                    )
                );
                addNotification(`Team member ${teamMembers[index].name}'s photo updated.`);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePlansChange = (event) => {
        setPlans(event.target.value);
    };

    const handlePlansSave = () => {
        setIsEditingPlans(false);
        addNotification("Plans for next month updated.");
    };

    const addNotification = (message) => {
        setNotifications((prevNotifications) => [...prevNotifications, message]);
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Settings
                </Typography>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Profile" sx={{ fontSize: 16, mr: 5 }} />
                        <Tab label="Password" sx={{ fontSize: 16, mr: 5 }} />
                        <Tab label="Team" sx={{ fontSize: 16, mr: 5 }} />
                        <Tab label="Plans" sx={{ fontSize: 16, mr: 5 }} />
                        <Tab label="Notification" sx={{ fontSize: 16, mr: 5 }} />
                        <Tab label="Appearance" sx={{ fontSize: 16, mr: 5 }} />
                    </Tabs>
                    <Divider sx={{ mt: 2, mb: 2 }} />

                    {/* Profile Section */}
                    {selectedTab === 0 && (
                        <Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                                <Box display="flex" alignItems="center">
                                    <Avatar
                                        alt="Roman Khan"
                                        src="https://media.licdn.com/dms/image/v2/D4D03AQH02KffaI4vSQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1700826594426?e=1731542400&v=beta&t=tQMIKarsTbMnAGQlYE9BH8yJrCh80l7QY9zUYJCHYZ0"
                                        sx={{ width: 100, height: 100, mr: 2 }}
                                    />
                                    <Box>
                                        <Typography variant="h6">{profile.firstName} {profile.lastName}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {profile.role}<br />{profile.branch} Branch
                                        </Typography>
                                    </Box>
                                </Box>
                                {!isEditing && (
                                    <IconButton color="primary" onClick={handleEditClick}>
                                        <EditIcon />
                                    </IconButton>
                                )}
                            </Box>
                            <Divider />

                            {/* Personal Information Section */}
                            <Box mt={3}>
                                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                    <Typography variant="h6">Personal Information</Typography>
                                    {!isEditing ? (
                                        <IconButton color="primary" onClick={handleEditClick}>
                                            <EditIcon />
                                        </IconButton>
                                    ) : (
                                        <>
                                            <IconButton color="secondary" onClick={handleCancelClick}>
                                                <CancelIcon />
                                            </IconButton>
                                            <IconButton color="primary" onClick={handleSaveClick}>
                                                <SaveIcon />
                                            </IconButton>
                                        </>
                                    )}
                                </Box>

                                {!isEditing ? (
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" color="textSecondary">First Name</Typography>
                                            <Typography variant="body1">{profile.firstName}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" color="textSecondary">Last Name</Typography>
                                            <Typography variant="body1">{profile.lastName}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" color="textSecondary">Email Address</Typography>
                                            <Typography variant="body1">{profile.email}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" color="textSecondary">Contact</Typography>
                                            <Typography variant="body1">{profile.contact}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" color="textSecondary">Branch</Typography>
                                            <Typography variant="body1">{profile.branch}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" color="textSecondary">Role</Typography>
                                            <Typography variant="body1">{profile.role}</Typography>
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="First Name"
                                                name="firstName"
                                                value={profile.firstName}
                                                onChange={handleInputChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Last Name"
                                                name="lastName"
                                                value={profile.lastName}
                                                onChange={handleInputChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Email Address"
                                                name="email"
                                                value={profile.email}
                                                onChange={handleInputChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Contact"
                                                name="contact"
                                                value={profile.contact}
                                                onChange={handleInputChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Branch"
                                                name="branch"
                                                value={profile.branch}
                                                onChange={handleInputChange}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Role"
                                                name="role"
                                                value={profile.role}
                                                onChange={handleInputChange}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                )}
                            </Box>
                        </Box>
                    )}

                    {/* Password Section */}
                    {selectedTab === 1 && (
                        <Box>
                            <Typography variant="h6" mb={2}>
                                Change Password
                            </Typography>

                            {passwordError && <Alert severity="error">{passwordError}</Alert>}
                            {passwordSuccess && <Alert severity="success">{passwordSuccess}</Alert>}

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Current Password"
                                        name="currentPassword"
                                        type="password"
                                        value={passwords.currentPassword}
                                        onChange={handlePasswordChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="New Password"
                                        name="newPassword"
                                        type="password"
                                        value={passwords.newPassword}
                                        onChange={handlePasswordChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Confirm New Password"
                                        name="confirmPassword"
                                        type="password"
                                        value={passwords.confirmPassword}
                                        onChange={handlePasswordChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" onClick={validateAndChangePassword}>
                                        Change Password
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    )}

                    {/* Team Section */}
                    {selectedTab === 2 && (
                        <Box>
                            <Typography variant="h6" mb={2}>
                                Team
                            </Typography>

                            {teamMembers.map((member, index) => (
                                <Box key={index} display="flex" alignItems="center" mb={2}>
                                    <Avatar
                                        alt={member.name}
                                        src={member.photo || "default_path_to_image"}
                                        sx={{ width: 64, height: 64, mr: 2 }}
                                    />
                                    <Box flexGrow={1}>
                                        {member.editing ? (
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        label="Name"
                                                        value={member.name}
                                                        onChange={(e) => handleTeamMemberChange(index, "name", e.target.value)}
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        label="Role"
                                                        value={member.role}
                                                        onChange={(e) => handleTeamMemberChange(index, "role", e.target.value)}
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button variant="contained" color="primary" onClick={() => handleTeamMemberSave(index)}>
                                                        Save
                                                    </Button>
                                                    <input
                                                        accept="image/*"
                                                        type="file"
                                                        style={{ display: "none" }}
                                                        id={`photo-upload-${index}`}
                                                        onChange={(e) => handlePhotoChange(index, e)}
                                                    />
                                                    <label htmlFor={`photo-upload-${index}`}>
                                                        <IconButton color="primary" component="span">
                                                            <PhotoCamera />
                                                        </IconButton>
                                                    </label>
                                                </Grid>
                                            </Grid>
                                        ) : (
                                            <Box>
                                                <Typography variant="h6">{member.name}</Typography>
                                                <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                                                <IconButton color="primary" onClick={() => handleTeamMemberEdit(index)}>
                                                    <EditIcon />
                                                </IconButton>
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    )}

                    {/* Plans Section */}
                    {selectedTab === 3 && (
                        <Box>
                            <Typography variant="h6" mb={2}>
                                Plans for Next Month ....
                            </Typography>

                            {isEditingPlans ? (
                                <Box>
                                    <TextField
                                        label="Plans"
                                        value={plans}
                                        onChange={handlePlansChange}
                                        multiline
                                        rows={4}
                                        fullWidth
                                    />
                                    <Button variant="contained" color="primary" onClick={handlePlansSave}>
                                        Save
                                    </Button>
                                </Box>
                            ) : (
                                <Box>
                                    <Typography variant="body1" paragraph>{plans}</Typography>
                                    <Button variant="contained" color="primary" onClick={() => setIsEditingPlans(true)}>
                                        Edit
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    )}

                    {/* Notification Section */}
                    {selectedTab === 4 && (
                        <Box>
                            <Typography variant="h6" mb={2}>
                                Notifications
                            </Typography>
                            {notifications.length === 0 ? (
                                <Typography variant="body1" color="textSecondary">
                                    No notifications
                                </Typography>
                            ) : (
                                <Box>
                                    {notifications.map((notification, index) => (
                                        <Box key={index} display="flex" alignItems="center" mb={1}>
                                            <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1 }}>
                                                {notification}
                                            </Typography>
                                            <IconButton onClick={() => setNotifications((prev) => prev.filter((_, i) => i !== index))}>
                                                <CloseIcon />
                                            </IconButton>
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    )}

                    {/* Appearance Section */}
                    {selectedTab === 5 && (
                        <Box>
                            <Typography variant="h6" mb={2}>
                                Appearance
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Typography variant="body1" sx={{ mr: 2 }}>Dark Mode</Typography>
                                <Switch checked={darkMode} onChange={toggleDarkMode} />
                            </Box>
                        </Box>
                    )}
                </Paper>

                {/* Snackbar for notifications */}
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    message={snackbarMessage}
                    action={
                        <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </Container>
        </ThemeProvider>
    );
};

export default SettingPage;
