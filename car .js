 function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modals = document.getElementsByClassName('modal');
            for (let modal of modals) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            }
        }

        // Toggle admin dashboard
        function toggleDashboard() {
            const dashboard = document.getElementById('adminDashboard');
            dashboard.classList.toggle('hidden');
        }

        // Simple booking system
        let bookings = [];
        
        function makeBooking(vehicle, startDate, endDate) {
            const booking = {
                id: Date.now(),
                vehicle,
                startDate,
                endDate,
                status: 'confirmed',
                total: calculateTotal(vehicle, startDate, endDate)
            };
            bookings.push(booking);
            return booking;
        }

        function calculateTotal(vehicle, startDate, endDate) {
            const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
            return days * vehicle.price;
        }

        // Loyalty points system
        class LoyaltyProgram {
            constructor() {
                this.points = 0;
                this.tier = 'Bronze';
            }

            addPoints(amount) {
                this.points += amount;
                this.updateTier();
            }

            updateTier() {
                if (this.points >= 1000) this.tier = 'Gold';
                else if (this.points >= 500) this.tier = 'Silver';
                else this.tier = 'Bronze';
            }

            redeemPoints(points) {
                if (points <= this.points) {
                    this.points -= points;
                    return true;
                }
                return false;
            }
        }

        // Initialize loyalty program
        const loyaltyProgram = new LoyaltyProgram();

        // Rating system
        function submitRating(bookingId, rating, comment) {
            // In a real app, this would send to a server
            console.log(`Rating submitted for booking ${bookingId}: ${rating} stars - ${comment}`);
        }

        // Maintenance tracking
        const maintenanceSchedule = [
            { vehicle: 'MB S-Class #1234', dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), status: 'scheduled' },
            { vehicle: 'BMW X5 #5678', dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), status: 'overdue' },
            { vehicle: 'Tesla Model 3 #9012', dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), status: 'scheduled' }
        ];

        // Emergency assistance
        function requestEmergencyAssistance(location, issue) {
            // In a real app, this would contact emergency services
            console.log(`Emergency assistance requested at ${location}. Issue: ${issue}`);
            alert('Emergency assistance has been notified. Help is on the way!');
        }

        // Payment integration simulation
        function processPayment(amount, cardDetails) {
            // Simulate payment processing
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ success: true, transactionId: 'TX' + Date.now() });
                }, 2000);
            });
        }

        // Discount system
        function applyDiscount(code, total) {
            const discounts = {
                'WELCOME10': 0.1,
                'SUMMER25': 0.25,
                'LOYALTY15': 0.15
            };
            
            const discount = discounts[code] || 0;
            return total * (1 - discount);
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DriveEasy Car Rental System initialized');
            
            // Sample data initialization
            loyaltyProgram.addPoints(150); // Starting points
            
            // Set minimum dates for booking forms
            const today = new Date().toISOString().split('T')[0];
            document.querySelectorAll('input[type="date"]').forEach(input => {
                input.min = today;
            });
        });