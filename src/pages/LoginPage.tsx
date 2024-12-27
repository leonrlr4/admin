import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Button, Card, CardContent, Box, TextField } from '@mui/material';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 使用 email 作為用戶名
        login({ username: email, password })
            .catch(() => notify('Invalid email or password'));
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="#f0f0f0"
        >
            <Card sx={{ minWidth: 300, maxWidth: 400 }}>
                <CardContent>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        display="flex"
                        flexDirection="column"
                        gap={2}
                    >
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            fullWidth
                            required
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};
