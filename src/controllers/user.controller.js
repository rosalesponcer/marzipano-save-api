export const login = (req, res) => {

    try {
        const { user, pass } = req.body;

        if (user === 'picnic' && pass === 'picnic321') res.status(200).json({ acces: true })
        else res.status(400).json({ access: false })

    } catch (error) {
        res.status(400).json({ acces: false })
    }

}