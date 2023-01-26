import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { LoremIpsum } from 'lorem-ipsum';
import { WorkflowIcon, PeopleIcon, JobsIcon, DocumentIcon } from './demo-icons';

const toIcon = function (name: string): React.ReactNode {
	const Icons: { [key: string]: any } = {
		submittal: WorkflowIcon,
		person: PeopleIcon,
		job: JobsIcon,
		document: DocumentIcon,
	};
	const SpecificIcon = Icons[name.toLowerCase()];
	return <SpecificIcon />;
};

const ipsumGen = new LoremIpsum();
const paragraphs = ipsumGen
	.generateParagraphs(20)
	.split(/\n/)
	.map((e, i) => (
		<Typography key={i} paragraph>
			{e}
		</Typography>
	));

const drawerWidth = 240;

export default function ShellAced() {
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => setIsDrawerOpen(!isDrawerOpen)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						ShellAced
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant={isDrawerOpen ? 'permanent' : 'persistent'}
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
				sx={{
					display: isDrawerOpen ? 'default' : 'none',
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<List>
						{['Person', 'Job', 'Submittal'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>{toIcon(text)}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['Document'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>{toIcon(text)}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Typography variant="h3">Feature Name</Typography>
				{paragraphs}
			</Box>
			<Box
				component="footer"
				sx={{
					display: 'block',
					position: 'fixed',
					bottom: 0,
					width: '100%',
					textAlign: 'center',
					bgcolor: 'white',
					m: 0,
					p: 0,
				}}
			>
				<Divider />
				<Typography variant="caption">&copy; 2023</Typography>
			</Box>
		</Box>
	);
}

