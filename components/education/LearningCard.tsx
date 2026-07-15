"use client";

import {
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { portfolio } from "@/data/portfolio";

export default function LearningCard() {
    const { education } = portfolio;
    const { currentLearnings } = education;
    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: 5,
                transition: "all .3s",

                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                },
            }}
        >
            <CardContent sx={{ p: 4 }}>
                <MenuBookRoundedIcon
                    color="primary"
                    sx={{ fontSize: 36 }}
                />

                <Typography
                    variant="h5"
                    mt={2}
                    mb={3}
                    fontWeight={700}
                >
                    Professional Development
                </Typography>

                <List disablePadding>
                    {currentLearnings.map((item) => (
                        <ListItem
                            key={item.title}
                            disableGutters
                        >
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircleRoundedIcon color="primary" />
                            </ListItemIcon>

                            <ListItemText
                                primary={item.title}
                                // secondary={item.issuer}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}