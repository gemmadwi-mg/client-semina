import React from 'react'

export default function Table({ user }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nomor</th>
                    <th>Nama</th>
                    <th>Usia</th>
                </tr>
            </thead>
            <tbody>
                {user.map(user => {
                    return (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
